using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TourManager.Data.Persistence;
using TourManagerLogic.Core.Api;
using TourManagerLogic.Core.Models;

namespace TourManagerWeb.Controllers
{
    [ApiController]
    [Route("apipublic/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly IUnityOfWork _unityOfWork;
        private ContacsApi _customersApi; 

        public ContactsController(
            IUnityOfWork unityOfWork
        )
        {
            _unityOfWork = unityOfWork;
            
            _customersApi = new ContacsApi(_unityOfWork);
        }     
        
        [AllowAnonymous]
        [HttpGet]
        [Route("ShowEntities")]
        public List<ContactModel> ShowVenues()
        {
            return _customersApi.GetAllPagination();
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("ShowEntitiesPagination")]
        public List<ContactModel> ShowVenuesPagination(int numberOfObjectsPerPage, int pageNumber)
        {

            if (numberOfObjectsPerPage > 50)
            {
                numberOfObjectsPerPage = 50;
            }

            if (pageNumber < 1)
            {
                pageNumber = 1;
            }

            //FIXME: decouple this to the api
            return _customersApi.Get(numberOfObjectsPerPage, pageNumber);
            
        }




        [AllowAnonymous]
        [HttpPost]
        [Route("Add")]
        public dynamic Add(ContactModel values)
        {
            _customersApi.Add(values);
            return true;
        }

        [AllowAnonymous]
        [HttpPut]
        [Route("Update")]
        public bool Update(ContactModel values)
        {
            _customersApi.Update(values);
            return true;
        }
        
        [AllowAnonymous]
        [HttpDelete]
        [Route("Delete")]
        public bool Delete(ContactModel values)
        {
            _customersApi.Update(values);
            return true;
        }
        
        [AllowAnonymous]
        [HttpGet]
        [Route("ShowInformationOfContactById")]
        public ContactModel ShowInformationOfContactById(int id)
        {
            return _customersApi.SelectBy(id);
        }
    }
}