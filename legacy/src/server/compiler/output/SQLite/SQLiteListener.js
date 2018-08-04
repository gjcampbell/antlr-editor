// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\SQLite\SQLite.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SQLiteParser.
function SQLiteListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SQLiteListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SQLiteListener.prototype.constructor = SQLiteListener;

// Enter a parse tree produced by SQLiteParser#parse.
SQLiteListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#parse.
SQLiteListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#error.
SQLiteListener.prototype.enterError = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#error.
SQLiteListener.prototype.exitError = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#sql_stmt_list.
SQLiteListener.prototype.enterSql_stmt_list = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#sql_stmt_list.
SQLiteListener.prototype.exitSql_stmt_list = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#sql_stmt.
SQLiteListener.prototype.enterSql_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#sql_stmt.
SQLiteListener.prototype.exitSql_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#alter_table_stmt.
SQLiteListener.prototype.enterAlter_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#alter_table_stmt.
SQLiteListener.prototype.exitAlter_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#analyze_stmt.
SQLiteListener.prototype.enterAnalyze_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#analyze_stmt.
SQLiteListener.prototype.exitAnalyze_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#attach_stmt.
SQLiteListener.prototype.enterAttach_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#attach_stmt.
SQLiteListener.prototype.exitAttach_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#begin_stmt.
SQLiteListener.prototype.enterBegin_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#begin_stmt.
SQLiteListener.prototype.exitBegin_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#commit_stmt.
SQLiteListener.prototype.enterCommit_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#commit_stmt.
SQLiteListener.prototype.exitCommit_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#compound_select_stmt.
SQLiteListener.prototype.enterCompound_select_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#compound_select_stmt.
SQLiteListener.prototype.exitCompound_select_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#create_index_stmt.
SQLiteListener.prototype.enterCreate_index_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#create_index_stmt.
SQLiteListener.prototype.exitCreate_index_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#create_table_stmt.
SQLiteListener.prototype.enterCreate_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#create_table_stmt.
SQLiteListener.prototype.exitCreate_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#create_trigger_stmt.
SQLiteListener.prototype.enterCreate_trigger_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#create_trigger_stmt.
SQLiteListener.prototype.exitCreate_trigger_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#create_view_stmt.
SQLiteListener.prototype.enterCreate_view_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#create_view_stmt.
SQLiteListener.prototype.exitCreate_view_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#create_virtual_table_stmt.
SQLiteListener.prototype.enterCreate_virtual_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#create_virtual_table_stmt.
SQLiteListener.prototype.exitCreate_virtual_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#delete_stmt.
SQLiteListener.prototype.enterDelete_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#delete_stmt.
SQLiteListener.prototype.exitDelete_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#delete_stmt_limited.
SQLiteListener.prototype.enterDelete_stmt_limited = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#delete_stmt_limited.
SQLiteListener.prototype.exitDelete_stmt_limited = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#detach_stmt.
SQLiteListener.prototype.enterDetach_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#detach_stmt.
SQLiteListener.prototype.exitDetach_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#drop_index_stmt.
SQLiteListener.prototype.enterDrop_index_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#drop_index_stmt.
SQLiteListener.prototype.exitDrop_index_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#drop_table_stmt.
SQLiteListener.prototype.enterDrop_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#drop_table_stmt.
SQLiteListener.prototype.exitDrop_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#drop_trigger_stmt.
SQLiteListener.prototype.enterDrop_trigger_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#drop_trigger_stmt.
SQLiteListener.prototype.exitDrop_trigger_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#drop_view_stmt.
SQLiteListener.prototype.enterDrop_view_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#drop_view_stmt.
SQLiteListener.prototype.exitDrop_view_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#factored_select_stmt.
SQLiteListener.prototype.enterFactored_select_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#factored_select_stmt.
SQLiteListener.prototype.exitFactored_select_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#insert_stmt.
SQLiteListener.prototype.enterInsert_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#insert_stmt.
SQLiteListener.prototype.exitInsert_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#pragma_stmt.
SQLiteListener.prototype.enterPragma_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#pragma_stmt.
SQLiteListener.prototype.exitPragma_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#reindex_stmt.
SQLiteListener.prototype.enterReindex_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#reindex_stmt.
SQLiteListener.prototype.exitReindex_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#release_stmt.
SQLiteListener.prototype.enterRelease_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#release_stmt.
SQLiteListener.prototype.exitRelease_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#rollback_stmt.
SQLiteListener.prototype.enterRollback_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#rollback_stmt.
SQLiteListener.prototype.exitRollback_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#savepoint_stmt.
SQLiteListener.prototype.enterSavepoint_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#savepoint_stmt.
SQLiteListener.prototype.exitSavepoint_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#simple_select_stmt.
SQLiteListener.prototype.enterSimple_select_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#simple_select_stmt.
SQLiteListener.prototype.exitSimple_select_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#select_stmt.
SQLiteListener.prototype.enterSelect_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#select_stmt.
SQLiteListener.prototype.exitSelect_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#select_or_values.
SQLiteListener.prototype.enterSelect_or_values = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#select_or_values.
SQLiteListener.prototype.exitSelect_or_values = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#update_stmt.
SQLiteListener.prototype.enterUpdate_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#update_stmt.
SQLiteListener.prototype.exitUpdate_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#update_stmt_limited.
SQLiteListener.prototype.enterUpdate_stmt_limited = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#update_stmt_limited.
SQLiteListener.prototype.exitUpdate_stmt_limited = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#vacuum_stmt.
SQLiteListener.prototype.enterVacuum_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#vacuum_stmt.
SQLiteListener.prototype.exitVacuum_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#column_def.
SQLiteListener.prototype.enterColumn_def = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#column_def.
SQLiteListener.prototype.exitColumn_def = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#type_name.
SQLiteListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#type_name.
SQLiteListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#column_constraint.
SQLiteListener.prototype.enterColumn_constraint = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#column_constraint.
SQLiteListener.prototype.exitColumn_constraint = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#conflict_clause.
SQLiteListener.prototype.enterConflict_clause = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#conflict_clause.
SQLiteListener.prototype.exitConflict_clause = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#expr.
SQLiteListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#expr.
SQLiteListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#foreign_key_clause.
SQLiteListener.prototype.enterForeign_key_clause = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#foreign_key_clause.
SQLiteListener.prototype.exitForeign_key_clause = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#raise_function.
SQLiteListener.prototype.enterRaise_function = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#raise_function.
SQLiteListener.prototype.exitRaise_function = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#indexed_column.
SQLiteListener.prototype.enterIndexed_column = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#indexed_column.
SQLiteListener.prototype.exitIndexed_column = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#table_constraint.
SQLiteListener.prototype.enterTable_constraint = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#table_constraint.
SQLiteListener.prototype.exitTable_constraint = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#with_clause.
SQLiteListener.prototype.enterWith_clause = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#with_clause.
SQLiteListener.prototype.exitWith_clause = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#qualified_table_name.
SQLiteListener.prototype.enterQualified_table_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#qualified_table_name.
SQLiteListener.prototype.exitQualified_table_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#ordering_term.
SQLiteListener.prototype.enterOrdering_term = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#ordering_term.
SQLiteListener.prototype.exitOrdering_term = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#pragma_value.
SQLiteListener.prototype.enterPragma_value = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#pragma_value.
SQLiteListener.prototype.exitPragma_value = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#common_table_expression.
SQLiteListener.prototype.enterCommon_table_expression = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#common_table_expression.
SQLiteListener.prototype.exitCommon_table_expression = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#result_column.
SQLiteListener.prototype.enterResult_column = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#result_column.
SQLiteListener.prototype.exitResult_column = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#table_or_subquery.
SQLiteListener.prototype.enterTable_or_subquery = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#table_or_subquery.
SQLiteListener.prototype.exitTable_or_subquery = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#join_clause.
SQLiteListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#join_clause.
SQLiteListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#join_operator.
SQLiteListener.prototype.enterJoin_operator = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#join_operator.
SQLiteListener.prototype.exitJoin_operator = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#join_constraint.
SQLiteListener.prototype.enterJoin_constraint = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#join_constraint.
SQLiteListener.prototype.exitJoin_constraint = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#select_core.
SQLiteListener.prototype.enterSelect_core = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#select_core.
SQLiteListener.prototype.exitSelect_core = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#compound_operator.
SQLiteListener.prototype.enterCompound_operator = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#compound_operator.
SQLiteListener.prototype.exitCompound_operator = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#cte_table_name.
SQLiteListener.prototype.enterCte_table_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#cte_table_name.
SQLiteListener.prototype.exitCte_table_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#signed_number.
SQLiteListener.prototype.enterSigned_number = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#signed_number.
SQLiteListener.prototype.exitSigned_number = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#literal_value.
SQLiteListener.prototype.enterLiteral_value = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#literal_value.
SQLiteListener.prototype.exitLiteral_value = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#unary_operator.
SQLiteListener.prototype.enterUnary_operator = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#unary_operator.
SQLiteListener.prototype.exitUnary_operator = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#error_message.
SQLiteListener.prototype.enterError_message = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#error_message.
SQLiteListener.prototype.exitError_message = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#module_argument.
SQLiteListener.prototype.enterModule_argument = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#module_argument.
SQLiteListener.prototype.exitModule_argument = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#column_alias.
SQLiteListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#column_alias.
SQLiteListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#keyword.
SQLiteListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#keyword.
SQLiteListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#name.
SQLiteListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#name.
SQLiteListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#function_name.
SQLiteListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#function_name.
SQLiteListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#database_name.
SQLiteListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#database_name.
SQLiteListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#table_name.
SQLiteListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#table_name.
SQLiteListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#table_or_index_name.
SQLiteListener.prototype.enterTable_or_index_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#table_or_index_name.
SQLiteListener.prototype.exitTable_or_index_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#new_table_name.
SQLiteListener.prototype.enterNew_table_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#new_table_name.
SQLiteListener.prototype.exitNew_table_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#column_name.
SQLiteListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#column_name.
SQLiteListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#collation_name.
SQLiteListener.prototype.enterCollation_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#collation_name.
SQLiteListener.prototype.exitCollation_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#foreign_table.
SQLiteListener.prototype.enterForeign_table = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#foreign_table.
SQLiteListener.prototype.exitForeign_table = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#index_name.
SQLiteListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#index_name.
SQLiteListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#trigger_name.
SQLiteListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#trigger_name.
SQLiteListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#view_name.
SQLiteListener.prototype.enterView_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#view_name.
SQLiteListener.prototype.exitView_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#module_name.
SQLiteListener.prototype.enterModule_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#module_name.
SQLiteListener.prototype.exitModule_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#pragma_name.
SQLiteListener.prototype.enterPragma_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#pragma_name.
SQLiteListener.prototype.exitPragma_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#savepoint_name.
SQLiteListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#savepoint_name.
SQLiteListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#table_alias.
SQLiteListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#table_alias.
SQLiteListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#transaction_name.
SQLiteListener.prototype.enterTransaction_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#transaction_name.
SQLiteListener.prototype.exitTransaction_name = function(ctx) {
};


// Enter a parse tree produced by SQLiteParser#any_name.
SQLiteListener.prototype.enterAny_name = function(ctx) {
};

// Exit a parse tree produced by SQLiteParser#any_name.
SQLiteListener.prototype.exitAny_name = function(ctx) {
};



exports.SQLiteListener = SQLiteListener;