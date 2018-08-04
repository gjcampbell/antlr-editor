grammar Hello;

what
    : problem (DASH problem)*
    ;
    
problem
    : LETTER+
    | SLASH problem
    ;
    
DASH        : '-';
SLASH       : '/';
LETTER      : [a-zA-Z];
