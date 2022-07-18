using System.Security.Cryptography;

namespace MarvelCharacters.Core
{
    public  static class HashGenerator
    {
        public static string CreateHash(string timestamp)
        {
            using (MD5 md5 = MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(timestamp+Keys.PrivateKey+Keys.PublicKey);
                byte[] hashBytes = md5.ComputeHash(inputBytes);
                return Convert.ToHexString(hashBytes).ToLower(); 
            }
        }
    }
}
