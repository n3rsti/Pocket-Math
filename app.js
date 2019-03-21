const pi = "π";
const pierwiastek3 = "√3";
const pierwiastek2 = "√2";
const pierwiastek = "√";
function pSquare(a){
    return Math.pow(a, 2);
};
function lSquare(a){ // Square, Rhombus
    return 4 * a;
};
function dSquare(a){
    return a + pierwiastek2;
};
function pCircle(r){
    return Math.pow(r, 2) + pi;
};
function lCircle(r){
    return 2 * r + pi;
};
function pHexagon(a){
    return 6 * Math.pow(a, 2) / 4 + pierwiastek3;
};
function lHexagon(a){
    return 6 * a;
};
function pKite(d1, d2){
    return (d1 * d2) / 2;
};
function lKite(a, b){  // Kite, Parral, Rectangle
    return 2 * a + 2 * b;
};
function pParral(a, h){ // Parral, Rhombus
    return a * h;
};
function pRectangle(a, b){
    return a * b;
}
function dRectangle(a, b){ // Rectangle, Triangle
    return pierwiastek + parseInt(Math.pow(a, 2) + Math.pow(b, 2));
};
function pTrapezoid(a, b, h){
    return (a + b) * h / 2;
};
function pTriangle(a, h){
    return a * h / 2;
};
function pEqTriangle(a){
    return Math.pow(a, 2) / 4 + pierwiastek3;
};
function hEqTriangle(a){
    return a / 2 + pierwiastek3;
};


