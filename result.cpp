#include <iostream>
using namespace std;

int main() {

    int m1, m2, m3, m4, m5;

    cout << "Enter 5 subject marks: ";
    cin >> m1 >> m2 >> m3 >> m4 >> m5;

    int total = m1 + m2 + m3 + m4 + m5;

    float percentage = total / 5.0;

    cout << "Total = " << total << endl;
    cout << "Percentage = " << percentage << "%" << endl;

    if (percentage >= 90)
        cout << "Grade = A+";
    else if (percentage >= 75)
        cout << "Grade = A";
    else if (percentage >= 60)
        cout << "Grade = B";
    else if (percentage >= 40)
        cout << "Grade = C";
    else
        cout << "Grade = Fail";

    return 0;
}