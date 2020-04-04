﻿using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Web.Models;

namespace Web.Controllers
{
    public class ClientesController : BaseController
    {
        public ClientesController(ILogger<ClientesController> logger) : base(logger)
        {

        }
    }
}
