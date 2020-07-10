using System;
using System.Threading.Tasks;
using DatingTutorial.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingTutorial.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            this._context = context;

        }
        public async Task<User> Login(string useremail, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserEmail == useremail);

            if(user == null) {
                return null;
            }

            if (!VerifyPasswordHarsh(password, user.PasswordHarsh, user.PasswordSalt)) {
                return null;
            };

            return user;
            
        }

        private bool VerifyPasswordHarsh(string password, byte[] passwordHarsh, byte[] passwordSalt)
        {
            using( var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHarsh = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHarsh.Length; i++)
                {
                    if(computedHarsh[i] != passwordHarsh[i]) {  
                        return false;
                    }
                }
            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHarsh, passwordSalt;
            CreatePasswordHarsh(password, out passwordHarsh, out passwordSalt);
            user.PasswordHarsh = passwordHarsh;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHarsh(string password, out byte[] passwordHarsh, out byte[] passwordSalt)
        {
            using( var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHarsh = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
           
        }

        public async Task<bool> UserExists(string useremail)
        {
            if(await _context.Users.AnyAsync(x => x.UserEmail == useremail)) {
                return true;
            } else {
                return false;
            }
        }
    }
}