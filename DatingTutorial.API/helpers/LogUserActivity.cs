using System;
using System.Security.Claims;
using System.Threading.Tasks;
using DatingTutorial.API.Data;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace DatingTutorial.API.helpers
{
    public class LogUserActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContext = await next();

            var userid = int.Parse(resultContext.HttpContext.User
                .FindFirst(ClaimTypes.NameIdentifier).Value);

            var repo  = resultContext.HttpContext.RequestServices.GetService<IDatingRepository>();

            var user = await repo.GetSingleUser(userid);

            user.LastActive = DateTime.Now;

            await repo.SaveAll();
        }
    }
}