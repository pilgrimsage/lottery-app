<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/old-results', 'Home::old_results');

$routes->get('files/image/(:any)', 'Home::showImage/$1');
$routes->get('files/download/(:any)', 'Home::downloadPdf/$1');

$routes->get('download-pdf/(:any)', 'PdfGenerator::download/$1');
$routes->get('lottery-print', 'Dashboard::lottery_print');
$routes->get('add-lottery', 'Dashboard::add_lottery');
$routes->post('pdf-upload-endpoint', 'PdfGenerator::uploadPdf');
$routes->post('save-lottery-results', 'LotteryController::saveLotteryResults');



$routes->post('save-lottery-files', 'LotteryController::updateLotteryResultFiles');
$routes->post('update-toggle-status', 'LotteryController::updateToggleStatus');

$routes->group('admin', function ($routes) {

    // Load all other Shield routes
    service('auth')->routes($routes);

    $routes->get('dashboard', 'Dashboard::index', ['filter' => 'login']);
    $routes->get('admin-dashboard', 'Dashboard::admin_dashboard',['filter' => 'login']);
    $routes->get('add-result', 'Dashboard::add_result', ['filter' => 'login']);
    $routes->get('view-result/(:any)', 'LotteryController::view_result/$1', ['filter' => 'login']);
    // $routes->get('add-result/(:segment)', 'Dashboard::add_result/$1', ['filter' => 'login']);
    $routes->get('generate-pdf', 'PdfGenerator::generateLotteryResult');
    $routes->post('delete-result', 'LotteryController::deleteResult');
});