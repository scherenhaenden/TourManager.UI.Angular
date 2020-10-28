using Microsoft.AspNetCore.Components;

namespace TourManagerWeb.Services
{
    public class HelperService
    {
        private NavigationManager _navigationManager;
        public HelperService(NavigationManager navigationManager)
        {
            _navigationManager = navigationManager;
        }

        public void ChangePage(string url)
        {
            _navigationManager.NavigateTo(url, true);
        }
    }
}