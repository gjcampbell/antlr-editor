grammar Funk;

where : allUpInThere EOF;

allUpInThere : WORDS (SPACES WORDS)*;

SPACES : ' ';
WORDS : [a-zA-Z]+;
