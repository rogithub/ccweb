using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Web.Models;

namespace Web.Controllers
{
    public class ProveedoresController : BaseController
    {
        public ProveedoresController(ILogger<ClientesController> logger) : base(logger)
        {

        }
    }
}
