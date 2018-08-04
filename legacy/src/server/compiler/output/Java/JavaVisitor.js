// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\Java\Java.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JavaParser.

function JavaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JavaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JavaVisitor.prototype.constructor = JavaVisitor;

// Visit a parse tree produced by JavaParser#compilationUnit.
JavaVisitor.prototype.visitCompilationUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#packageDeclaration.
JavaVisitor.prototype.visitPackageDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#importDeclaration.
JavaVisitor.prototype.visitImportDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeDeclaration.
JavaVisitor.prototype.visitTypeDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#modifier.
JavaVisitor.prototype.visitModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#classOrInterfaceModifier.
JavaVisitor.prototype.visitClassOrInterfaceModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#variableModifier.
JavaVisitor.prototype.visitVariableModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#classDeclaration.
JavaVisitor.prototype.visitClassDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeParameters.
JavaVisitor.prototype.visitTypeParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeParameter.
JavaVisitor.prototype.visitTypeParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeBound.
JavaVisitor.prototype.visitTypeBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#enumDeclaration.
JavaVisitor.prototype.visitEnumDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#enumConstants.
JavaVisitor.prototype.visitEnumConstants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#enumConstant.
JavaVisitor.prototype.visitEnumConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#enumBodyDeclarations.
JavaVisitor.prototype.visitEnumBodyDeclarations = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#interfaceDeclaration.
JavaVisitor.prototype.visitInterfaceDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeList.
JavaVisitor.prototype.visitTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#classBody.
JavaVisitor.prototype.visitClassBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#interfaceBody.
JavaVisitor.prototype.visitInterfaceBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#classBodyDeclaration.
JavaVisitor.prototype.visitClassBodyDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#memberDeclaration.
JavaVisitor.prototype.visitMemberDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#methodDeclaration.
JavaVisitor.prototype.visitMethodDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#genericMethodDeclaration.
JavaVisitor.prototype.visitGenericMethodDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#constructorDeclaration.
JavaVisitor.prototype.visitConstructorDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#genericConstructorDeclaration.
JavaVisitor.prototype.visitGenericConstructorDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#fieldDeclaration.
JavaVisitor.prototype.visitFieldDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#interfaceBodyDeclaration.
JavaVisitor.prototype.visitInterfaceBodyDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#interfaceMemberDeclaration.
JavaVisitor.prototype.visitInterfaceMemberDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#constDeclaration.
JavaVisitor.prototype.visitConstDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#constantDeclarator.
JavaVisitor.prototype.visitConstantDeclarator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#interfaceMethodDeclaration.
JavaVisitor.prototype.visitInterfaceMethodDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#genericInterfaceMethodDeclaration.
JavaVisitor.prototype.visitGenericInterfaceMethodDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#variableDeclarators.
JavaVisitor.prototype.visitVariableDeclarators = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#variableDeclarator.
JavaVisitor.prototype.visitVariableDeclarator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#variableDeclaratorId.
JavaVisitor.prototype.visitVariableDeclaratorId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#variableInitializer.
JavaVisitor.prototype.visitVariableInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#arrayInitializer.
JavaVisitor.prototype.visitArrayInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#enumConstantName.
JavaVisitor.prototype.visitEnumConstantName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeType.
JavaVisitor.prototype.visitTypeType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#classOrInterfaceType.
JavaVisitor.prototype.visitClassOrInterfaceType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#primitiveType.
JavaVisitor.prototype.visitPrimitiveType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeArguments.
JavaVisitor.prototype.visitTypeArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeArgument.
JavaVisitor.prototype.visitTypeArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#qualifiedNameList.
JavaVisitor.prototype.visitQualifiedNameList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#formalParameters.
JavaVisitor.prototype.visitFormalParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#formalParameterList.
JavaVisitor.prototype.visitFormalParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#formalParameter.
JavaVisitor.prototype.visitFormalParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#lastFormalParameter.
JavaVisitor.prototype.visitLastFormalParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#methodBody.
JavaVisitor.prototype.visitMethodBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#constructorBody.
JavaVisitor.prototype.visitConstructorBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#qualifiedName.
JavaVisitor.prototype.visitQualifiedName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#literal.
JavaVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotation.
JavaVisitor.prototype.visitAnnotation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationName.
JavaVisitor.prototype.visitAnnotationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#elementValuePairs.
JavaVisitor.prototype.visitElementValuePairs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#elementValuePair.
JavaVisitor.prototype.visitElementValuePair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#elementValue.
JavaVisitor.prototype.visitElementValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#elementValueArrayInitializer.
JavaVisitor.prototype.visitElementValueArrayInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationTypeDeclaration.
JavaVisitor.prototype.visitAnnotationTypeDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationTypeBody.
JavaVisitor.prototype.visitAnnotationTypeBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationTypeElementDeclaration.
JavaVisitor.prototype.visitAnnotationTypeElementDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationTypeElementRest.
JavaVisitor.prototype.visitAnnotationTypeElementRest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationMethodOrConstantRest.
JavaVisitor.prototype.visitAnnotationMethodOrConstantRest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationMethodRest.
JavaVisitor.prototype.visitAnnotationMethodRest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#annotationConstantRest.
JavaVisitor.prototype.visitAnnotationConstantRest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#defaultValue.
JavaVisitor.prototype.visitDefaultValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#block.
JavaVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#blockStatement.
JavaVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#localVariableDeclarationStatement.
JavaVisitor.prototype.visitLocalVariableDeclarationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#localVariableDeclaration.
JavaVisitor.prototype.visitLocalVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#statement.
JavaVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#catchClause.
JavaVisitor.prototype.visitCatchClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#catchType.
JavaVisitor.prototype.visitCatchType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#finallyBlock.
JavaVisitor.prototype.visitFinallyBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#resourceSpecification.
JavaVisitor.prototype.visitResourceSpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#resources.
JavaVisitor.prototype.visitResources = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#resource.
JavaVisitor.prototype.visitResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#switchBlockStatementGroup.
JavaVisitor.prototype.visitSwitchBlockStatementGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#switchLabel.
JavaVisitor.prototype.visitSwitchLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#forControl.
JavaVisitor.prototype.visitForControl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#forInit.
JavaVisitor.prototype.visitForInit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#enhancedForControl.
JavaVisitor.prototype.visitEnhancedForControl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#forUpdate.
JavaVisitor.prototype.visitForUpdate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#parExpression.
JavaVisitor.prototype.visitParExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#expressionList.
JavaVisitor.prototype.visitExpressionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#statementExpression.
JavaVisitor.prototype.visitStatementExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#constantExpression.
JavaVisitor.prototype.visitConstantExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#expression.
JavaVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#primary.
JavaVisitor.prototype.visitPrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#creator.
JavaVisitor.prototype.visitCreator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#createdName.
JavaVisitor.prototype.visitCreatedName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#innerCreator.
JavaVisitor.prototype.visitInnerCreator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#arrayCreatorRest.
JavaVisitor.prototype.visitArrayCreatorRest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#classCreatorRest.
JavaVisitor.prototype.visitClassCreatorRest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#explicitGenericInvocation.
JavaVisitor.prototype.visitExplicitGenericInvocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#nonWildcardTypeArguments.
JavaVisitor.prototype.visitNonWildcardTypeArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#typeArgumentsOrDiamond.
JavaVisitor.prototype.visitTypeArgumentsOrDiamond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#nonWildcardTypeArgumentsOrDiamond.
JavaVisitor.prototype.visitNonWildcardTypeArgumentsOrDiamond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#superSuffix.
JavaVisitor.prototype.visitSuperSuffix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#explicitGenericInvocationSuffix.
JavaVisitor.prototype.visitExplicitGenericInvocationSuffix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavaParser#arguments.
JavaVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JavaVisitor = JavaVisitor;