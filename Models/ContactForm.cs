using System.ComponentModel.DataAnnotations;

namespace Crito.Models;

public class ContactForm
{
    [Required(ErrorMessage = "You must enter a first name.")]
    [Display(Name = "Name")]
    [DataType(DataType.Text)]
    public string Name { get; set; } = null!;

    [Required(ErrorMessage = "You must enter an e-mail address.")]
    [RegularExpression(@"^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "Your must enter a valid e-mail address.")]
    [Display(Name = "E-mail Address")]
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; } = null!;

    [Required(ErrorMessage = "You must enter a message")]
    [Display(Name = "Message")]
    [DataType(DataType.Text)]
    public string Message { get; set; } = null!;

    public string? RedirectUrl { get; set; } = "/#";
}
