using System;
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

        [Required]
        public string knownAs { get; set; }

        [Required]
        public DateTime dateOfBirth { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string country { get; set; }

        [Required]
        public string gender { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }


    }
}