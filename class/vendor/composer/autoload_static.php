<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit57393891175556db42ecc0182506bce3
{
    public static $prefixLengthsPsr4 = array (
        'L' => 
        array (
            'Lcobucci\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Lcobucci\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/lcobucci/jwt/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit57393891175556db42ecc0182506bce3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit57393891175556db42ecc0182506bce3::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
