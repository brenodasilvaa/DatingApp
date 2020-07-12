using System.Collections.Generic;
using System.Threading.Tasks;
using DatingTutorial.API.Models;

namespace DatingTutorial.API.Data
{
    public interface IDatingRepository 
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetSingleUser(int id);
    }
}