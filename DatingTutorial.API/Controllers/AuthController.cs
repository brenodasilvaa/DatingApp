using System.Security.Claims;
using System.Threading.Tasks;
using DatingTutorial.API.Data;
using DatingTutorial.API.DTO;
using DatingTutorial.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System;
using System.IdentityModel.Tokens.Jwt;
using AutoMapper;

namespace DatingTutorial.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper)
        {
            this._mapper = mapper;
            this._config = config;
            this._repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await this._repo.UserExists(userForRegisterDto.UserEmail))
            {
                return BadRequest("Username Already Exists!");
            };

            var userToCreate = _mapper.Map<User>(userForRegisterDto);

            var createdUser = await this._repo.Register(userToCreate, userForRegisterDto.Password);

            var userToReturn = _mapper.Map<UserForDetailedDto>(createdUser);

            return CreatedAtRoute("GetUser", new {controller = "Users", id = createdUser.Id}, userToReturn);
        }

        [HttpPost("login")]

        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await this._repo.Login(userForLoginDto.UserEmail, userForLoginDto.Password);

            if (userFromRepo == null)
            {
                return Unauthorized();
            }
            else
            {
                var claims = new[] {
                    new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                    new Claim(ClaimTypes.Email, userFromRepo.UserEmail),
                    new Claim(ClaimTypes.Name, userFromRepo.Username)
                };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this._config.GetSection("AppSettings:Token").Value));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

                var tokenDescriptor = new SecurityTokenDescriptor
                {

                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = creds
                };

                var tokenHandler = new JwtSecurityTokenHandler();

                var token = tokenHandler.CreateToken(tokenDescriptor);

                var user = _mapper.Map<UserForListDto>(userFromRepo);

                return Ok(new
                {
                    token = tokenHandler.WriteToken(token),
                    user
                });
            }
        }
    }
}