using System;
using TourManagerLogic.Core.Models;

namespace TourManagerWeb.Temporal
{
    public class ProxyModelForVenues: VenueModel
    {
        public new DateTime LoadIn
        {
            get
            {
                var date = new DateTime(0, 0, 0, base.LoadIn.Hours, base.LoadIn.Minutes, 0);
                return date;
            }
            set
            {
                base.LoadIn = new TimeSpan(0, value.Hour, value.Minute, 0);

            }
        }

        public new DateTime CurfView 
        { 
            get
            {
                var date = new DateTime(0, 0, 0, base.CurfView.Hours, base.CurfView.Minutes, 0);
                return date;
            }
            set
            {
                base.CurfView = new TimeSpan(0, value.Hour, value.Minute, 0);

            }
        } 
    }
}