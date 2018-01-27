using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Newtonsoft.Json;
using System.Text;

namespace OriginStoryFitness.Web.controllers
{
 
    public class SignUpController : Controller
    {
        private static readonly HttpClient client = new HttpClient
        {
            BaseAddress = new Uri("https://us16.api.mailchimp.com")
        };
        private static readonly string _listId = "7584a86458";
        private readonly string _apiKey = "abf491affeb83f06601e5692663fe4cf-us16";

        [HttpPost]
        public async Task<IActionResult> Subscribe(string email, string name)

        {
            var mailChimpBody = new MailChimpPost
            {
                email_address = email,
                merge_fields = new MergeFields { NAME = name },
            };
        var formData = JsonConvert.SerializeObject(mailChimpBody);

           
           
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("ApiKey", _apiKey);
            var mailChimpUrl = string.Format("/3.0/Lists/{0}/members", _listId);

            var response = await client.PostAsync(mailChimpUrl, new StringContent(formData));

            var responseContent = response.Content.ReadAsStringAsync();
            var content = JsonConvert.DeserializeObject(responseContent.Result);
           

            if (response.IsSuccessStatusCode)
            {
                return Ok();
            }
            else
            {

                return BadRequest(content);

            }
             

        }


        public class SignUpForm
        {
            public string Email { get; set; }

            public string FName { get; set; }
            
        }

        public class MailChimpPost
        {

            public MailChimpPost()
            {
                status = "subscribed";
            }
            public string email_address { get; set; }

            public string status { get; set; }

            public MergeFields merge_fields { get; set; }

        }

        public class MergeFields
        {
            
            public string NAME { get; set; }

            
        }
      
    }


}