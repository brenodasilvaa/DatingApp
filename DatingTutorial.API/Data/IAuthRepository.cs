using System.Threading.Tasks;
using DatingTutorial.API.Models;

namespace DatingTutorial.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register (User user, string password);
         Task<User> Login (string useremail, string password);
         Task<bool> UserExists (string useremail);
    }
}