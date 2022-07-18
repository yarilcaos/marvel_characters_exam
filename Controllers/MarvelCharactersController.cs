using MarvelCharacters.Core;
using MarvelCharacters.ServerModels;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace MarvelCharacters.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MarvelCharacters : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public MarvelCharacters(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<Result>> Get()
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get, 
                RequestUri = new Uri(MarvelEndPoints.URLGetAllCharacters())
            };
            var response = client.Send(request);
            var data=await response.Content.ReadFromJsonAsync<CharacterDataWrapper>();
            return data.data.results;
        }
     
    }
}