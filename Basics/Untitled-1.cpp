#include<iostream>
using namespace std;
class base
{
public:

virtual void fun1() { cout<<""base::fun1""; }

};

class derived: public base

{

public:

void fun1() { cout<<"" derived :: fun1""; }

virtual void fun2()
{ cout<<""derived :: fun2""; }

};

int main()

{

base *ptr1, *ptr2;

base b;

derived d;

ptr1 = &b;

ptr2 = &d;

ptr1->fun1();

ptr2->fun1();

ptr2->fun2();

return 0;

}