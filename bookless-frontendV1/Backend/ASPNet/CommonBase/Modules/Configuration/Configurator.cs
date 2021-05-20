using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
//@BaseCode

namespace CommonBase.Modules.Configuration
{
    public static partial class Configurator
    {
        public static IConfigurationRoot LoadAppSettings()
        {
            var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var builder = new ConfigurationBuilder()
                .SetBasePath(Environment.CurrentDirectory)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environmentName ?? "Development"}.json", optional: true)
                .AddEnvironmentVariables();

            return builder.Build();
        }
    }
}
