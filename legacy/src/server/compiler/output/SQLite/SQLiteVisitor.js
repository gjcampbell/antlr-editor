// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\SQLite\SQLite.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SQLiteParser.

function SQLiteVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SQLiteVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SQLiteVisitor.prototype.constructor = SQLiteVisitor;

// Visit a parse tree produced by SQLiteParser#parse.
SQLiteVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#error.
SQLiteVisitor.prototype.visitError = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#sql_stmt_list.
SQLiteVisitor.prototype.visitSql_stmt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#sql_stmt.
SQLiteVisitor.prototype.visitSql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#alter_table_stmt.
SQLiteVisitor.prototype.visitAlter_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#analyze_stmt.
SQLiteVisitor.prototype.visitAnalyze_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#attach_stmt.
SQLiteVisitor.prototype.visitAttach_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#begin_stmt.
SQLiteVisitor.prototype.visitBegin_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#commit_stmt.
SQLiteVisitor.prototype.visitCommit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#compound_select_stmt.
SQLiteVisitor.prototype.visitCompound_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#create_index_stmt.
SQLiteVisitor.prototype.visitCreate_index_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#create_table_stmt.
SQLiteVisitor.prototype.visitCreate_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#create_trigger_stmt.
SQLiteVisitor.prototype.visitCreate_trigger_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#create_view_stmt.
SQLiteVisitor.prototype.visitCreate_view_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#create_virtual_table_stmt.
SQLiteVisitor.prototype.visitCreate_virtual_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#delete_stmt.
SQLiteVisitor.prototype.visitDelete_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#delete_stmt_limited.
SQLiteVisitor.prototype.visitDelete_stmt_limited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#detach_stmt.
SQLiteVisitor.prototype.visitDetach_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#drop_index_stmt.
SQLiteVisitor.prototype.visitDrop_index_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#drop_table_stmt.
SQLiteVisitor.prototype.visitDrop_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#drop_trigger_stmt.
SQLiteVisitor.prototype.visitDrop_trigger_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#drop_view_stmt.
SQLiteVisitor.prototype.visitDrop_view_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#factored_select_stmt.
SQLiteVisitor.prototype.visitFactored_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#insert_stmt.
SQLiteVisitor.prototype.visitInsert_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#pragma_stmt.
SQLiteVisitor.prototype.visitPragma_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#reindex_stmt.
SQLiteVisitor.prototype.visitReindex_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#release_stmt.
SQLiteVisitor.prototype.visitRelease_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#rollback_stmt.
SQLiteVisitor.prototype.visitRollback_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#savepoint_stmt.
SQLiteVisitor.prototype.visitSavepoint_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#simple_select_stmt.
SQLiteVisitor.prototype.visitSimple_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#select_stmt.
SQLiteVisitor.prototype.visitSelect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#select_or_values.
SQLiteVisitor.prototype.visitSelect_or_values = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#update_stmt.
SQLiteVisitor.prototype.visitUpdate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#update_stmt_limited.
SQLiteVisitor.prototype.visitUpdate_stmt_limited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#vacuum_stmt.
SQLiteVisitor.prototype.visitVacuum_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#column_def.
SQLiteVisitor.prototype.visitColumn_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#type_name.
SQLiteVisitor.prototype.visitType_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#column_constraint.
SQLiteVisitor.prototype.visitColumn_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#conflict_clause.
SQLiteVisitor.prototype.visitConflict_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#expr.
SQLiteVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#foreign_key_clause.
SQLiteVisitor.prototype.visitForeign_key_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#raise_function.
SQLiteVisitor.prototype.visitRaise_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#indexed_column.
SQLiteVisitor.prototype.visitIndexed_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#table_constraint.
SQLiteVisitor.prototype.visitTable_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#with_clause.
SQLiteVisitor.prototype.visitWith_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#qualified_table_name.
SQLiteVisitor.prototype.visitQualified_table_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#ordering_term.
SQLiteVisitor.prototype.visitOrdering_term = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#pragma_value.
SQLiteVisitor.prototype.visitPragma_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#common_table_expression.
SQLiteVisitor.prototype.visitCommon_table_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#result_column.
SQLiteVisitor.prototype.visitResult_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#table_or_subquery.
SQLiteVisitor.prototype.visitTable_or_subquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#join_clause.
SQLiteVisitor.prototype.visitJoin_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#join_operator.
SQLiteVisitor.prototype.visitJoin_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#join_constraint.
SQLiteVisitor.prototype.visitJoin_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#select_core.
SQLiteVisitor.prototype.visitSelect_core = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#compound_operator.
SQLiteVisitor.prototype.visitCompound_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#cte_table_name.
SQLiteVisitor.prototype.visitCte_table_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#signed_number.
SQLiteVisitor.prototype.visitSigned_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#literal_value.
SQLiteVisitor.prototype.visitLiteral_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#unary_operator.
SQLiteVisitor.prototype.visitUnary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#error_message.
SQLiteVisitor.prototype.visitError_message = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#module_argument.
SQLiteVisitor.prototype.visitModule_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#column_alias.
SQLiteVisitor.prototype.visitColumn_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#keyword.
SQLiteVisitor.prototype.visitKeyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#name.
SQLiteVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#function_name.
SQLiteVisitor.prototype.visitFunction_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#database_name.
SQLiteVisitor.prototype.visitDatabase_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#table_name.
SQLiteVisitor.prototype.visitTable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#table_or_index_name.
SQLiteVisitor.prototype.visitTable_or_index_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#new_table_name.
SQLiteVisitor.prototype.visitNew_table_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#column_name.
SQLiteVisitor.prototype.visitColumn_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#collation_name.
SQLiteVisitor.prototype.visitCollation_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#foreign_table.
SQLiteVisitor.prototype.visitForeign_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#index_name.
SQLiteVisitor.prototype.visitIndex_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#trigger_name.
SQLiteVisitor.prototype.visitTrigger_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#view_name.
SQLiteVisitor.prototype.visitView_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#module_name.
SQLiteVisitor.prototype.visitModule_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#pragma_name.
SQLiteVisitor.prototype.visitPragma_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#savepoint_name.
SQLiteVisitor.prototype.visitSavepoint_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#table_alias.
SQLiteVisitor.prototype.visitTable_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#transaction_name.
SQLiteVisitor.prototype.visitTransaction_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SQLiteParser#any_name.
SQLiteVisitor.prototype.visitAny_name = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SQLiteVisitor = SQLiteVisitor;