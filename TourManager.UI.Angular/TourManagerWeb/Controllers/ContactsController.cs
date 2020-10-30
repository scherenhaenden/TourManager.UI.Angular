using System;
using System.Collections.Generic;
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