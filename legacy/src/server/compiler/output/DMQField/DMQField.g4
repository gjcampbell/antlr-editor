grammar DMQField;

aliasedExpr 
    : .+ (alias)? EOF
    ;

alias
	: AS fieldName
	;
	
expr 
    : fieldOperation (alias)? EOF
    ;

fieldOperation
    : fieldModifier (fieldOperator fieldModifier)*
    ;
    
fieldModifier
    : fieldExpressionGroup
    | fieldExpression
    | variable
    ;
    
fieldOperator
	: OPERATOR
	;

fieldExpressionGroup
    : LPAREN fieldOperation RPAREN
    ;

fieldExpression
    : fieldChain
    | functionCall
    ; 

fieldChain 
    : fieldChainLink DOT fieldChain
    | fieldName
    ;

fieldChainLink
    : fieldName
    ;

fieldName
    : escapedFieldName
    | safeFieldName
    ;    

variable
    : ATPERSAND SAFENAME
    ;

safeFieldName
    : SAFENAME
    ;

escapedFieldName
    : ANYNAME
    ;

functionCall
    : functionName singleParameter
    | functionName parameterList
    ;

functionName
    : SAFENAME
    ;

singleParameter
    : fieldExpression
    ;

parameterList
    : LPAREN fieldOperation (COMMA fieldOperation)* RPAREN
    ;

ATPERSAND       : '@';
COMMA           : ',';
DOT             : '.';
SAFENAME        : [a-zA-Z_][a-zA-Z0-9_]*;
ANYNAME         : '['~']'+']';
AS				: [aA][sS];
LSQBRACKET      : '[';
RSQBRACKET      : ']';
LPAREN          : '(';
RPAREN          : ')';
OPERATOR        : '+' | '-' | '/' | '*' | '&';
WS              : [ \t\r\n]+ -> skip;