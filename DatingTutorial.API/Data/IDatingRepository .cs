using System.Collections.Generic;
using System.Threading.Tasks;
using DatingTutorial.API.helpers;
using DatingTutorial.API.Models;

namespace DatingTutorial.API.Data
{
    public interface IDatingRepository 
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();
         Task<PagedList<User>> GetUsers(UserParams userParams);
         Task<User> GetSingleUser(int id);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhotoForUser(int userId);
         Task<Like> GetLike(int userId, int recipientId);
         Task<Message> GetMessage(int id);
         Task<PagedList<Message>> GetMessageForUser(MessageParams messageParams);
         Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);


    }
}