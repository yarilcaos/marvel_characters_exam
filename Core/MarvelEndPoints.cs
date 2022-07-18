namespace MarvelCharacters.Core
{
    public static class MarvelEndPoints
    {
        public const string BaseEndpoint = "https://gateway.marvel.com/v1/public/";

        public static string URLGetAllCharacters()
        {
            return UrlGenerator("characters");
        }
        public static string URLGetSingleCharacter(string id)
        {
            return UrlGenerator("characters/"+id);
        }
        public static string UrlGenerator(string endPoint)
        {
            string UrlResult = BaseEndpoint;
            var timeStamp = TimeStampGenerator.GetTimeStamp();
            UrlResult += endPoint;
            UrlResult += "?ts=" + timeStamp;
            UrlResult += "&apikey=" + Keys.PublicKey;
            UrlResult += "&hash=" + HashGenerator.CreateHash(timeStamp);
            return UrlResult;
        }

    

      
    }
}
