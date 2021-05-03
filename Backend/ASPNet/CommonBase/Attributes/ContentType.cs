//@BaseCode

namespace CommonBase.Attributes
{
	public enum ContentType : byte
    {
        Undefined = byte.MaxValue,
        //
        // Summary:
        //     Represents a custom data type.
        Custom = 0,
        //
        // Summary:
        //     Represents an instant in time, expressed as a date and time of day.
        DateTime = 1,
        //
        // Summary:
        //     Represents a date value.
        Date = 2,
        //
        // Summary:
        //     Represents a time value.
        Time = 3,
        //
        // Summary:
        //     Represents a continuous time during which an object exists.
        Duration = 4,
        //
        // Summary:
        //     Represents a phone number value.
        PhoneNumber = 5,
        //
        // Summary:
        //     Represents a currency value.
        Currency = 6,
        //
        // Summary:
        //     Represents text that is displayed.
        Text = 7,
        //
        // Summary:
        //     Represents an HTML file.
        Html = 8,
        //
        // Summary:
        //     Represents multi-line text.
        MultilineText = 9,
        //
        // Summary:
        //     Represents an email address.
        EmailAddress = 10,
        //
        // Summary:
        //     Represent a password value.
        Password = 11,
        //
        // Summary:
        //     Represents a URL value.
        Url = 12,
        //
        // Summary:
        //     Represents a URL to an image.
        ImageUrl = 13,
        //
        // Summary:
        //     Represents a credit card number.
        CreditCard = 14,
        //
        // Summary:
        //     Represents a postal code.
        PostalCode = 15,
        //
        // Summary:
        //     Represents file upload data type.
        Upload = 16
    }
}
