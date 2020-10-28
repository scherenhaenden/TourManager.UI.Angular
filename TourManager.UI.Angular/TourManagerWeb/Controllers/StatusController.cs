using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using TourManager.Data.Core.Configuration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;

namespace TourManagerWeb.Controllers
{
    [ApiController]
    [Route("apipublic/[controller]")]
    public class StatusController: ControllerBase
    {
      

        public StatusController( )
        {
            
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("GetInfo")]
        public dynamic GetInfo()
        {
            List<string> infos = new List<string>();
            infos.Add(GetAExePath());


            try
            {



                var path = "./here.txt";
                
                using (StreamWriter writer = new StreamWriter(path))  
                {  
                    writer.WriteLine("Monica Rathbun");  
                    writer.WriteLine("Vidya Agarwal");  
                    writer.WriteLine("Mahesh Chand");  
                    writer.WriteLine("Vijay Anand");  
                    writer.WriteLine("Jignesh Trivedi");  
                }  

                
                
                
                
                
            }
            catch (Exception ex)
            {
                infos.Add(ex.StackTrace);
            }


            return infos;
        }


        public string GetAExePath()
        {
            var exePath =   Path.GetDirectoryName(System.Reflection
                .Assembly.GetExecutingAssembly().CodeBase);
            return exePath;

        } 
    }
    
    
}