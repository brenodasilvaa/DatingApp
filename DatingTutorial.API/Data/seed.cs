using System.Collections.Generic;
using System.Linq;
using DatingTutorial.API.Models;
using Newtonsoft.Json;

namespace DatingTutorial.API.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context) 
        {
            if ( !context.Users.Any()) 
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                foreach (var user in users)
                {
                    byte[] passwordhash, passwordSalt;
                    CreatePasswordHarsh("password", out passwordhash, out passwordSalt);

                    user.PasswordHarsh = passwordhash;
                    user.PasswordSalt = passwordSalt;
                    context.Users.Add(user);
                }

                context.SaveChanges();
            }
        }

        private static void CreatePasswordHarsh(string password, out byte[] passwordHarsh, out byte[] passwordSalt)
        {
            using( var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHarsh = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
           
        }
    }
}