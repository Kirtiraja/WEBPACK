import $ from 'jquery';
import { YourFunction } from './../src/biz-logic.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import  imageName from './imageFileName.gif';

let imageNameImg = document.getElementById('imageName');
imageNameImg.src = imageName;

$(document).ready(function(){
  let fuzzy = new YourFunction();
  $('#nameForm').submit(function(){
    event.preventDefault();
    $('.feed, .poke, .sleep').fadeIn();
    $('#nameForm').hide();
