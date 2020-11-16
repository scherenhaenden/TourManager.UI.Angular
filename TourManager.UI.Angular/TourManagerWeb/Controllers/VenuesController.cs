using System;
using System.Linq;
using TourManager.Data.Core.Configuration;
using TourManager.Data.Core.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TourManager.Data.Persistence;
using TourManagerLogic.Core.Api;
using TourManagerLogic.Core.Models;
using TourManagerWeb.Temporal;

namespace TourManagerWeb.Controllers
{
    [ApiController]
    [Route("apipublic/[controller]")]
    public class VenuesController : ControllerBase
    {
        private readonly TourManagerContext _tourManagerContext;
        private readonly IUnityOfWork _unityOfWork;

        public VenuesController(
            IUnityOfWork unityOfWork
            , TourManagerContext tourManagerContext
        )
        {
            _unityOfWork = unityOfWork;
            _tourManagerContext = tourManagerContext;
        }        
        
        
        
        [AllowAnonymous]
        [HttpPost]
        [Route("showvenues")]
        public dynamic ShowVenues()
        {
            try
            {
                return _tourManagerContext.Venues.ToList();
            }
            catch (Exception ex)
            {
                return ex.StackTrace;
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("addvenue")]
        public dynamic AddVenue(ProxyModelForVenues values)
        {
            var venuesApi = new VenuesApi(_unityOfWork);
            venuesApi.Add((VenueModel)values);
            return null;
        }
        
        
        [AllowAnonymous]
        [HttpGet]
        [Route("DeleteVenue")]
        public dynamic DeleteVenue(int id)
        {            
            var entity = _tourManagerContext.Venues.SingleOrDefault(x => x.Id == id);
            _tourManagerContext.Remove(entity);
            _tourManagerContext.SaveChanges();
            return true;
        }
        
        
        //FIXME: Decouple to api
        public void VanuesToContactDecoupling(ProxyModelForVenues values)
        {
            var venuesContactApi = new VenuesContactApi(_unityOfWork);
            foreach (var venuesToContacts in values.VenuesToContacts)
            {
                var result = venuesContactApi.Find(x => x.Id == venuesToContacts.Id).FirstOrDefault();
                if (result != null)
                {
                    
                    venuesContactApi.Update(result);
                }
                else
                {   
                    venuesContactApi.Add(venuesToContacts);
                }
            }
        }
        
        
        //FIXME: Decouple to api
        public void VanuesToContactDecouplingDelete(ProxyModelForVenues values)
        {
            var venuesContactApi = new VenuesContactApi(_unityOfWork);
            foreach (var venuesToContacts in values.VenuesToContacts)
            {
                var result = venuesContactApi.Find(x => x.Id == venuesToContacts.Id).FirstOrDefault();
                if (result != null)
                {
                    
                    venuesContactApi.Update(result);
                }
                else
                {   
                    venuesContactApi.Add(venuesToContacts);
                }
            }
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("UpdateVenue")]
        public dynamic UpdateVenue(ProxyModelForVenues values)
        {   
            
            
            var venuesApi = new VenuesApi(_unityOfWork);

            var currentIdentity = venuesApi.Find(x => x.Id == values.Id).FirstOrDefault();


            var all=from curenntVToC in currentIdentity.VenuesToContacts
                                    join incomming in values.VenuesToContacts on curenntVToC.Id equals incomming.Id into bothResults
                                    from g in bothResults.DefaultIfEmpty()
                                    select new {curenntVToC = curenntVToC, incomming = g};

            var all2= all.ToList();
            
                
            
            
            



            //FIXME: Decouple to api

            if (values.VenuesToContacts != null)
            {
                if (values.VenuesToContacts.Count > 0)
                {
                    VanuesToContactDecoupling(values);
                }
            }


          


            venuesApi.Update( (VenueModel)values);
            
           return null;
        }
        
        
        [AllowAnonymous]
        [HttpGet]
        [Route("VenuewInformation")]
        public dynamic GetVenuewInformation(int id)
        {
            var model = _tourManagerContext.Venues.SingleOrDefault(x => x.Id == id);
            return model;
        }
    }
}