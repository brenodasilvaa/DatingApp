namespace DatingTutorial.API.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string UserEmail {get; set; }

        public byte[] PasswordHarsh { get; set; }

        public byte[] PasswordSalt { get; set; }

    }
}