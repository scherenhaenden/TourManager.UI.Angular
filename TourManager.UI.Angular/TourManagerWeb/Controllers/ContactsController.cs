using System;
using System.Linq;
using TourManager.Data.Core.Configuration;
using TourManager.Data.Core.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TourManagerLogic.ApiModels;
using TourManagerLogic.Core.Api;
using TourManagerWeb.ApiModels;

namespace TourManagerWeb.Controllers
{
    [ApiController]
    [Route("apipublic/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly TourManagerContext _tourManagerContext;
        private CustomersApi _customersApi; 

        public ContactsController(
            TourManagerContext tourManagerContext
        )
        {
            _tourManagerContext = tourManagerContext;
            _customersApi = new CustomersApi(_tourManagerContext);
        }     
        
        
        [AllowAnonymous]
        [HttpPost]
        [Route("Add")]
        public dynamic Add(ContactsModel values)
        {
            _customersApi.Add(values);
            return true;
        }
        
        [AllowAnonymous]
        [HttpGet]
        [Route("ShowEntities")]
        public dynamic ShowVenues()
        {
            try
            {
                return _tourManagerContext.Contacts.ToList();
            }
            catch (Exception ex)
            {
                return ex.StackTrace;
            }

            
        }
        
      
    }
}