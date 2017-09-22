using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OriginStoryFitness.Web.Pages
{
    public class IndexModel : PageModel
    {
        [ResponseCache(Duration = 30)]
        public void OnGet()
        {

        }
    }
}
