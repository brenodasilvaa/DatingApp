using System.ComponentModel.DataAnnotations;

namespace DatingTutorial.API.DTO
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="Sua senha deve conter entre 4 e 8 caracteres.")]
        public string Password { get; set; }

        [Required]
        [EmailAddress]
        public string UserEmail { get; set; }
    }
}