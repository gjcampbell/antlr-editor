grammar What;


TAB     : ('    '|[\t]) -> pushMode(DOC);

mode DOC;
DNL     : [\r\n] -> popMode;


mode FIELD_VALUE;

FVNL    : [\r\n] -> popMode;
