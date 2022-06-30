// inicializador del tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// inicializador de Select2.js
$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

// comportamiento menú herramientas/menú principal (mobile) navegación interna
$("[data-link]").click(function () {
    var dropdown = $(this).closest('.content-menu');
    var ref = $(this).data("link");
    if ($(this).data("action") === "back") {
        $(dropdown).find("[data-ref=" + ref + "]").addClass("current").removeClass("hide-lt hide-rt");
        $(this).closest(".dropdown-menu-wrapper").addClass("hide-rt").removeClass("current");
    } else {
        $(dropdown).find("[data-ref=" + ref + "]").addClass("current").removeClass("hide-lt hide-rt");
        $(this).closest(".dropdown-menu-wrapper").addClass("hide-lt").removeClass("current");
    }
})

// comportamiento desplegar/colapsar menu lateral, menu usuario (mobile)
$(".button-sidebar-toggle, .cbl-logo-button-toggle").click(function () {
    if ($("body").hasClass("sidebar-open")) {
        $(this).children("i").removeClass("la-times").addClass("la-bars");
    } else {
        $(this).children("i").removeClass("la-bars").addClass("la-times");
    }
    $("body").toggleClass("sidebar-open").removeClass("usermenu-open");
    e.stopPropagation()
})

// hace que el menu lateral se cierre al cambiar el tamaño de la ventana
$(window).bind("resize", function () {
    console.log($(this).width())
    if ($(this).width() < 800) {
        $('body').removeClass('sidebar-open');
        $('.button-sidebar-toggle i').removeClass('la-times').addClass('la-bars');
    }
}).trigger('resize');

// cambia el icono del button que abre y cierra el menu lateral
$(".button-usermenu-toggle").click(function () {
    $("body").toggleClass("usermenu-open").removeClass("sidebar-open");
    $(this).children("i").toggleClass("la-user-circle la-times");
    e.stopPropagation()
})

// abre el modal tipo de cambio al presionar el el boton correspondiente
$(".cbl-exchange-button").click(function () {
    $('#modalExchange').modal('show');
})

// Sugerencias buscador
$(function () {
    var source = [
        //Modulo ventas
        { label: 'Buscar facturas', value: '/comprobantes.aspx' },
        { label: 'Buscar facturas pendientes', value: '/modulos/ventas/facturasElectronicasPendientes.aspx' },
        { label: 'Buscar cobranzas', value: '/cobranzas.aspx' },
        { label: 'Buscar presupuestos', value: '/presupuestos.aspx' },
        { label: 'Buscar productos y servicios', value: '/conceptos.aspx' },
        { label: 'Buscar rubros', value: '/rubros.aspx' },
        { label: 'Buscar clientes', value: '/personas.aspx?tipo=c' },
        { label: 'Buscar abonos', value: '/abonos.aspx' },
        { label: 'Nueva factura', value: '/comprobantese.aspx' },
        { label: 'Nueva cobranza', value: '/cobranzase.aspx' },
        { label: 'Nuevo presupuesto', value: '/presupuestose.aspx' },
        { label: 'Nuevo producto o servicio', value: '/conceptose.aspx' },
        { label: 'Nuevo cliente', value: '/personase.aspx?tipo=c' },
        { label: 'Nuevo abonos', value: '/abonose.aspx' },
        { label: 'Facturar abonos', value: '/generarAbonos.aspx' },
        { label: 'Aplicar cobranzas a cuenta', value: '/aplicarCobranzasACuenta.aspx' },
        { label: 'Aumento de precios', value: '/modulos/ventas/aumentoMasivoPrecios.aspx' },
        { label: 'Condiciones de venta', value: '/modulos/ventas/condicionesVentas.aspx' },
        //Modulo Compras
        { label: 'Buscar ordenes de compras', value: '/ordenesCompras.aspx' },
        { label: 'Buscar compras', value: '/compras.aspx' },
        { label: 'Buscar pagos', value: '/pagos.aspx' },
        { label: 'Buscar proveedores', value: '/personas.aspx?tipo=p' },
        { label: 'Nueva compra', value: '/comprase.aspx' },
        { label: 'Nuevo pago', value: '/pagose.aspx' },
        { label: 'Nuevo proveedor', value: '/personase.aspx?tipo=p' },
        { label: 'Aplicar pagos a cuenta', value: '/aplicarPagosACuenta.aspx' },
        //Modulo tesoreria
        { label: 'Buscar bancos', value: '/modulos/tesoreria/bancos.aspx' },
        //{ label: 'Buscar gastos bancarios', value: '/modulos/tesoreria/gastosBancarios.aspx' },
        { label: 'Buscar cheques', value: '/modulos/tesoreria/cheques.aspx' },
        { label: 'Buscar Movimientos de fondos', value: '/modulos/tesoreria/MovimientoDeFondos' },
        { label: 'Buscar caja', value: '/modulos/tesoreria/caja.aspx' },
        { label: 'Nuevo banco', value: '/modulos/tesoreria/bancose.aspx' },
        { label: 'Nuevo gastos bancarios', value: '/modulos/tesoreria/bancosDetalle.aspx' },
        { label: 'Nuevo cheque', value: '/modulos/tesoreria/chequese.aspx' },
        { label: 'Detalle Bancario', value: '/modulos/reportes/DetalleBancario.aspx' },
        //Modulo inventarios
        { label: 'Buscar depósitos', value: '/modulos/inventarios/inventarios.aspx' },
        { label: 'Nuevo depósitos', value: '/modulos/inventarios/inventariose.aspx' },
        { label: 'Modificar stock', value: '/modulos/inventarios/modificacionStock.aspx' },
        { label: 'Movimientos de stock', value: '/modulos/inventarios/movimientosDeStock.aspx' },
        { label: 'Movimientos entre depósitos', value: '/modulos/inventarios/movimientosDeStock.aspx' },
        //Modulo contabilidad
        { label: 'Libro diario', value: '/modulos/contabilidad/LibroDiario.aspx' },
        { label: 'Libro diario copiativo', value: '/modulos/contabilidad/LibroDiarioCopiativo.aspx' },
        { label: 'Libro mayor', value: '/modulos/contabilidad/LibroMayor.aspx' },
        { label: 'Plan de cuentas', value: '/modulos/contabilidad/plandecuentas.aspx' },
        { label: 'Balance general', value: '/modulos/reportes/BalanceGeneral.aspx' },
        { label: 'Estado de resultado', value: '/modulos/reportes/EstadoResultado.aspx' },
        { label: 'Asientos manuales', value: '/modulos/contabilidad/asientosManuales.aspx' },
        //Reportes
        { label: 'Reporte Ventas vs Compras', value: '/modulos/reportes/ventas-vs-compras.aspx' },
        { label: 'Reporte Ventas vs Pagos', value: '/modulos/reportes/ventas-vs-pagos.aspx' },
        { label: 'Reporte Compras por categoría', value: '/modulos/reportes/compras-por-categoria.aspx' },
        { label: 'Reporte Compras por categorias mensuales', value: '/modulos/reportes/compras-por-categoria-mensual.aspx' },
        { label: 'Reporte Liquidez anual', value: '/modulos/reportes/utilidad.aspx' },
        { label: 'Reporte Cobrado vs Pagado', value: '/modulos/reportes/cobrado-vs-pagado.aspx' },
        { label: 'Reporte Ventas mensuales', value: '/modulos/reportes/ventasDelMes.aspx' },
        { label: 'Reporte IVA Compras', value: '/reportes/iva-compras.aspx' },
        { label: 'Reporte IVA Ventas', value: '/modulos/reportes/iva-ventas.aspx' },
        { label: 'Reporte IVA Saldo', value: '/reportes/iva-saldo.aspx' },
        { label: 'Reporte Retenciones', value: '/reportes/retenciones.aspx' },
        { label: 'Reporte Percepciones', value: '/modulos/reportes/percepciones.aspx' },
        { label: 'Reporte C.I.T.I: compras y ventas', value: 'modulos/reportes/citiVentas.aspx' },
        { label: 'Reporte Cuenta Corriente', value: '/modulos/reportes/cc.aspx' },
        { label: 'Reporte Cobranzas pendientes', value: '/reportes/cobranzasPendientes.aspx' },
        { label: 'Reporte Pagos a proveedores', value: '/modulos/reportes/pagoprov.aspx' },
        { label: 'Reporte Stock productos', value: '/modulos/reportes/stock.aspx' },
        { label: 'Reporte Cuentas a pagar', value: '/modulos/reportes/cuentasPagar.aspx' },
        { label: 'Reporte Ranking por cliente', value: '/modulos/reportes/rnk-clientes.aspx' },
        { label: 'Reporte Ranking por producto/servicio', value: '/modulos/reportes/rnk-conceptos.aspx' },
        { label: 'Reporte Tracking de horas', value: '/modulos/reportes/trackingHora.aspx' },
        { label: 'Reporte Productos/servicios por cliente', value: '/modulos/reportes/productosPorCliente.aspx' },
        { label: 'Reporte Compras por cliente', value: '/modulos/reportes/comprasPorCliente.aspx' },
        { label: 'Reporte Entradas y salidas de productos', value: '/modulos/reportes/historicoStock.aspx' },
        { label: 'Reporte Rentabilidad', value: '/modulos/reportes/rentabilidad-de-productos.aspx' },
        { label: 'Reporte Rentabilidad x Venta', value: '/modulos/reportes/rentabilidad-de-productos-det.aspx' },
        { label: 'Reporte Ventas por puntos de venta mensuales', value: '/modulos/reportes/ventas-por-pdv-mensual.aspx' },
        { label: 'Reporte Comisiones por vendedor', value: '/modulos/reportes/comisiones.aspx' },
        { label: 'Reporte Ventas por provincias', value: '/modulos/reportes/ventasPorProvincias.aspx' },
        { label: 'Reporte Compras por provincias', value: '/modulos/reportes/comprasPorProvincias.aspx' },
        { label: 'Reporte Ingresos y egresos por categorias', value: '/modulos/reportes/IngresosEgresosCategorias.aspx' },
        { label: 'Stock por Despacho de importacion', value: '/modulos/reportes/stockPorDespachoDeImportacion.aspx' },

        //Importaciones
        { label: 'Importar clientes', value: '/importar.aspx?tipo=Clientes' },
        { label: 'Importar proveedores', value: '/importar.aspx?tipo=Proveedores' },
        { label: 'Importar productos', value: '/importar.aspx?tipo=Productos' },
        { label: 'Importar servicios', value: '/importar.aspx?tipo=Servicios' },
        { label: 'Importar compras', value: '/importar.aspx?tipo=FacturasCompras' },
        { label: 'Importar ventas', value: '/importar.aspx?tipo=Facturas' },
        //Otros
        { label: 'Explorador de archivos', value: '/file-explorer.aspx' },
        { label: 'Alertas', value: '/alertas.aspx' },
        { label: 'Administrar usuarios', value: '/modulos/seguridad/usuarios.aspx' }
    ];
    $("#search").autocomplete({
        source: source,
        select: function (event, ui) {
            window.location.href = ui.item.value;
        }
    });
});

// lógica para el contador de notificaciones
function setBadgeCount() {
    $('.cbl-icon-badge[data-count]').each(function (i, item) {
        var badge = $(item);
        var count = $(badge).data("count");
        if (count) {
            if (count <= 0) {
                $(badge).css({ 'display': 'none' });
            } else {
                if (count >= 100) {
                    $(badge).append("+99");
                } else {
                    $(badge).append(count);
                }
            }
        }
    });
}

// funciones que se ejecutan al inicializar el documento
$(document).ready(function () {
    setBadgeCount();
});