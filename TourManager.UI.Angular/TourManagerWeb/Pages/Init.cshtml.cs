using System;
using System.Threading;
using System.Threading.Tasks;
using TourManager.Data.Core.Configuration;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc.RazorPages;
using  Microsoft.AspNetCore.Components;
using TourManagerWeb.Services;

namespace TourManagerWeb.Pages
{
    public class Init : PageModel
    {
        private readonly TourManagerContext _tourManagerContext;
        private readonly HelperService _helperService;

        public string error;

        public Init(TourManagerContext tourManagerContext, HelperService helperService)
        {
            _tourManagerContext = tourManagerContext;
            _helperService = helperService;
        }
        
        


        public void OnGet()
        {
            if (_tourManagerContext == null)
            {
                error = "db do not work";

                return;
            }
            
            

            error = "no errors";
            
            var task = Task.Run(async () => await DoMyRedirection());
            
            

       

        }

        public async Task DoMyRedirection()
        {
            Thread.Sleep(3000);
            //UriHelper.
            //this.Url.
            Redirect("index.html");
        }
        
        public async Task Redirect(string location)
        {
            HttpContext.Response.StatusCode = 302;
            HttpContext.Response.Headers.Add("Location", location);
            _helperService.ChangePage(location);
            /*HttpContext.Response.
            
            if (await IsServerSideRendering())
            {
                
                //_httpContextAccessor.HttpContext.Response.Headers.Add("Location", location);
                //_httpContextAccessor.HttpContext.Response.StatusCode = 302;
            }
            else
            {
                

                //NavigationManager = new NavigationManager();
                //Microsoft.AspNetCore.Components.na
                //UriHelper.NavigateTo(location);
                
            }*/
        }
    }
}