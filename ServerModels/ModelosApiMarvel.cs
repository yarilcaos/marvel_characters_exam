﻿namespace MarvelCharacters.ServerModels
{
    public class ModelosApiMarvel
    {
    }


    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    public class Comics
    {
        public int available { get; set; }
        public string collectionURI { get; set; }
        public List<Item> items { get; set; }
        public int returned { get; set; }
    }

    public class Data
    {
        public int offset { get; set; }
        public int limit { get; set; }
        public int total { get; set; }
        public int count { get; set; }
        public List<Result> results { get; set; }
    }

    public class Events
    {
        public int available { get; set; }
        public string collectionURI { get; set; }
        public List<Item> items { get; set; }
        public int returned { get; set; }
    }

    public class Item
    {
        public string resourceURI { get; set; }
        public string name { get; set; }
        public string type { get; set; }
    }

    public class Result
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string modified { get; set; }
        public Thumbnail thumbnail { get; set; }
        public string resourceURI { get; set; }
        public Comics comics { get; set; }
        public Series series { get; set; }
        public Stories stories { get; set; }
        public Events events { get; set; }
        public List<Url> urls { get; set; }
    }

    public class CharacterDataWrapper
    {
        public int code { get; set; }
        public string status { get; set; }
        public string copyright { get; set; }
        public string attributionText { get; set; }
        public string attributionHTML { get; set; }
        public string etag { get; set; }
        public Data data { get; set; }
    }

    public class Series
    {
        public int available { get; set; }
        public string collectionURI { get; set; }
        public List<Item> items { get; set; }
        public int returned { get; set; }
    }

    public class Stories
    {
        public int available { get; set; }
        public string collectionURI { get; set; }
        public List<Item> items { get; set; }
        public int returned { get; set; }
    }

    public class Thumbnail
    {
        public string path { get; set; }
        public string extension { get; set; }
    }

    public class Url
    {
        public string type { get; set; }
        public string url { get; set; }
    }




}
