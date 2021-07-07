using Expenses.Core;
using Expenses.DB;
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

		private IExpensesServices _expensesServices;
		//public ExpensesController(ILogger<ExpensesController> logger)
		//{
		//_logger = logger;
		//}

		public ExpensesController(IExpensesServices expensesServices)
		{
			_expensesServices = expensesServices;
		}

		[HttpGet]
		public IActionResult GetExpenses()
		{

			return Ok(_expensesServices.GetExpenses());
		}

		[HttpGet("{id}", Name = "GetExpense")]
		public IActionResult GetExpense(int id) 
		{
			return Ok(_expensesServices.GetExpense(id));
		}

		[HttpPost]
		public IActionResult CreateExpense(Expense expense)
		{
			var exp = _expensesServices.CreateExpense(expense);

			return CreatedAtRoute("GetExpense", new {exp.Id }, exp );
		}


		[HttpDelete]
		public IActionResult DeleteExpense(Expense expense)
		{
			_expensesServices.DeleteExpense(expense);

			return Ok();
		}

		[HttpPut]
		public IActionResult UpdateExpense(Expense expense) 
		{
			return Ok(_expensesServices.UpdateExpense(expense));
		}
	}
}
