using System.Security.Cryptography;

namespace MarvelCharacters.Core
{
    public  static class TimeStampGenerator
    {
        public static string GetTimeStamp()
        {
            return DateTime.Now.ToString("yyyyMMddHHmmssffff");
        }
    }
}
