using Expenses.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.Core
{
	public interface IExpensesServices
	{
		List<Expense> GetExpenses();

		Expense GetExpense(int id);

		Expense CreateExpense(Expense expense);

		void DeleteExpense(Expense expense);

		Expense UpdateExpense(Expense expense);
	}
}
