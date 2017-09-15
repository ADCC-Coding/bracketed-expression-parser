# bracketed-expression-parser

Now that we're so good at validating brackets, let's write a program that gets a bracketed expression as input, and produces all the smaller bracketed expressions that make the larger one. One can use parentheses, braces, and brackets to build these expressions. 
 
Examples:
 
Input:
()

Output:
()

 
Input:
( a b [)]

Output:
Invalid expression

 
Input:
a (b c) d

Output:
(b c)

 
Input: 
[ a { b c } (e [f g] h) (i j) ]

Output:
[ a { b c } (e [f g] h) (i j) ]
{ b c }
(e [f g] h)
[f g]
(i j)

 
Input:
(* (+ a (^ b 2)) c)

Output:
(* (+ a (^ b 2)) c)
(+ a (^ b 2))
(^ b 2)
 
Input:
(defun first-child (tree) (if (null tree) nil (cdr (car tree)) ) )

Output:
(defun first-child (tree) (if (null tree) nil (cdr (car tree)) ) )
(tree)
(if (null tree) nil (cdr (car tree)) )
(null tree)
(cdr (car tree))
(car tree)

 