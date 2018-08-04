grammar FieldChanges;

session
    : SESSION sessionName documents
    ;

sessionName
    : NAME
    ;

documents
    : document+
    ;
    
document
    : TAB documentName fieldValues+
    ;
    
documentName
    : DOC_NAME
    ;
    
fieldValues
    : fieldValue+
    ;
    
fieldValue
    : TAB TAB action fieldName value
    ;

action
    : ADD
    | REMOVE
    ;

fieldName
    : FIELD_NAME
    ;

value
    : NAME
    ;
    
ADD         : 'Add';
REMOVE      : 'Remove';
SESSION     : 'Session';
DOC_NAME    : [a-zA-Z0-9\-_]+;
TAB         : ('    '|[\t]);
FIELD_NAME  : ([a-zA-Z0-9 ]~[:\t\r\n])+':';
NAME        : ([a-zA-Z0-9 ]~[:\t\r\n])+;
NL          : [ \t\r\n]+ -> skip;
