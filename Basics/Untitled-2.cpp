#include <vector>

#include <algorithm>

#include <iostream>

#include <iterator>

using namespace std;

int square(int i) { return i* i; }

int main()

{

vector<int> V, V2;

V.push_back(0);

V.push_back(1);

V.push_back(2);

transform(V.begin(), V.end(), back_inserter(V2), square); copy(V2.begin(), V2.end(), ostream_iterator<int>(cout,""));

cout << endl;

}