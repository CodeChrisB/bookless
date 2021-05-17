//@BaseCode
using Microsoft.Extensions.Configuration;

namespace CommonBase.Modules.Configuration
{
    public partial class AppSettings
	{
        private static IConfiguration configuration;

        public static IConfiguration Configuration
        {
            get => configuration ??= Configurator.LoadAppSettings();
            set => configuration = value;
        }

        public static string GetValue(string key)
        {
            return Configuration[key];
        }
    }
}
