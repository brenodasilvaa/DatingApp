using System;

namespace DatingTutorial.API.DTO
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public int recipientId { get; set; }
        public DateTime MessageSent { get; set; }
        public string Content { get; set; }
        public MessageForCreationDto()
        {
            MessageSent = DateTime.Now;
        }
    }
}