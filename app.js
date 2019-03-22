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
function dSquare(a){ // Square
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

// Spatial figures
function vCone(r, H){
    return Math.pow(r, 2) * H / 3 + pi;
};
function pCone(r, l){
    return Math.pow(r, 2) + r * l + pi;
};
function pCube(a){
    return 6 * Math.pow(a, 2);
};
function vCube(a){
    return Math.pow(a, 3);
};
function dCube(a){
    return a + pierwiastek3;
};
function pCuboid(a, b, c){
    return 2 * (a * b) + 2 * (a * c) + 2 * (b * c);
}
function vCuboid(a, b, c){
    return a * b * c;
};
function vCylinder(r, H){
    return Math.pow(r, 2) * H + pi;
};
function pCylinder(r, H){
    return 2 * Math.pow(r, 2) + 2 * r * H + pi;
};
function vSphere(r){
    return 4 / 3 * Math.pow(r, 3) + pi;
};
function pSphere(r){
    return 4 * Math.pow(r, 2) + pi;
};
function vSquarePyramid(Pp, H){
    return (Pp * H) / 3;
};
function pSquarePyramid(Pp, Pb){
    return Pp + Pb;
};