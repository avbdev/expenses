using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Expenses.API.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class ExpensesController : ControllerBase
	{
		private readonly ILogger<ExpensesController> _logger;

		public ExpensesController(ILogger<ExpensesController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public IActionResult GetExpenses() 
		{

			return Ok("Expenses are empty");
		}
		
	}
}
