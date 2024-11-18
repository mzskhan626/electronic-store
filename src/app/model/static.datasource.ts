import { Injectable, Signal, signal } from "@angular/core";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private data: Product[] = [
        // Gaming Laptops
        new Product(
            1,
            "Alienware m17 R5",
            "Gaming Laptops",
            "High-end gaming laptop with premium performance.",
            "The Alienware m17 R5 features a 17.3-inch FHD display, AMD Ryzen 9 processor, NVIDIA GeForce RTX 3080 Ti graphics, and advanced cooling technology for intense gaming.",
            2499,
            "/assets/alienware.jpeg"
        ),
        new Product(
            2,
            "Asus ROG Zephyrus G15",
            "Gaming Laptops",
            "Portable and powerful gaming laptop with sleek design.",
            "The ROG Zephyrus G15 features a 15.6-inch QHD display, AMD Ryzen 9 processor, NVIDIA GeForce RTX 3070 graphics, and a lightweight build.",
            1899,
            "/assets/Asus.jpeg"
        ),
        new Product(
            3,
            "MSI Raider GE77",
            "Gaming Laptops",
            "Premium laptop designed for competitive gamers.",
            "The MSI Raider GE77 features a 17.3-inch 4K display, Intel Core i9 processor, NVIDIA GeForce RTX 3080 Ti graphics, and customizable RGB lighting.",
            2999,
            "/assets/msi.jpeg"
        ),
        new Product(
            4,
            "Razer Blade 15",
            "Gaming Laptops",
            "Sleek and powerful gaming laptop with premium build quality.",
            "The Razer Blade 15 features a 15.6-inch QHD display, Intel Core i7 processor, NVIDIA GeForce RTX 3070 Ti graphics, and an ultra-thin aluminum chassis.",
            2399,
            "/assets/acer.jpeg"
        ),

        // Gaming Consoles
        new Product(
            5,
            "PlayStation 5",
            "Gaming Consoles",
            "Sony’s latest console for immersive gaming.",
            "The PlayStation 5 features lightning-fast load times, stunning 4K graphics, and a library of exclusive games like Spider-Man: Miles Morales.",
            499,
            "/assets/ps5.jpeg"
        ),
        new Product(
            6,
            "Xbox Series X",
            "Gaming Consoles",
            "Microsoft’s most powerful gaming console.",
            "The Xbox Series X offers 12 teraflops of processing power, 4K gaming, and access to Xbox Game Pass for hundreds of games.",
            499,
            "/assets/xbox.jpeg"
        ),
        new Product(
            7,
            "Nintendo Switch OLED",
            "Gaming Consoles",
            "Portable and versatile gaming console.",
            "The Nintendo Switch OLED features a 7-inch OLED display, improved audio, and enhanced tabletop mode for on-the-go gaming.",
            349,
            "/assets/oled.jpeg"
        ),
        new Product(
            8,
            "Steam Deck",
            "Gaming Consoles",
            "Handheld PC gaming console for enthusiasts.",
            "The Steam Deck features a 7-inch LCD touchscreen, AMD APU processor, and compatibility with a massive library of PC games.",
            399,
            "/assets/steam.jpeg"
        ),

        // Headphones
        new Product(
            9,
            "Sony WH-1000XM5",
            "Headphones",
            "Industry-leading noise-canceling headphones.",
            "The Sony WH-1000XM5 features superior noise cancellation, 30 hours of battery life, and crystal-clear sound quality for an immersive listening experience.",
            399,
            "/assets/sony.jpeg"
        ),
        new Product(
            10,
            "Bose QuietComfort 45",
            "Headphones",
            "Comfortable headphones with world-class noise cancellation.",
            "The Bose QuietComfort 45 features plush ear cushions, 24 hours of battery life, and balanced sound for long listening sessions.",
            329,
            "/assets/bose.jpeg"
        ),
        new Product(
            11,
            "SteelSeries Arctis Nova Pro",
            "Headphones",
            "Premium gaming headphones with superior audio quality.",
            "The SteelSeries Arctis Nova Pro features Hi-Res audio, active noise cancellation, and a comfortable design for extended gaming sessions.",
            349,
            "/assets/steal.jpg"
        ),
        new Product(
            12,
            "HyperX Cloud II",
            "Headphones",
            "Affordable headphones with exceptional gaming performance.",
            "The HyperX Cloud II features 7.1 surround sound, memory foam ear cushions, and a durable aluminum frame for comfort and reliability.",
            99,
            "/assets/hyper.jpeg"
        ),

        // Phones
        new Product(
            13,
            "iPhone 16 Pro",
            "Phones",
            "A high-performance smartphone with advanced features.",
            "The iPhone 14 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip for unmatched performance, and a triple-camera system for professional-grade photography.",
            1200,
            "/assets/iphone.jpeg"
        ),
        new Product(
            14,
            "Samsung Galaxy S23 Ultra",
            "Phones",
            "Flagship phone with a stunning camera and long-lasting battery.",
            "The Galaxy S23 Ultra boasts a 6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 2 processor, and a 200 MP main camera for capturing exceptional detail.",
            1199,
            "/assets/samsung.jpeg"
        ),
        new Product(
            15,
            "Google Pixel 7",
            "Phones",
            "The ultimate Android experience with exceptional camera quality.",
            "The Pixel 7 features a 6.3-inch OLED display, Tensor G2 chip for optimized AI performance, and cutting-edge photo editing tools in Google Photos.",
            599,
            "/assets/google.jpeg"
        ),
        new Product(
            16,
            "OnePlus 11",
            "Phones",
            "Affordable flagship with premium features and fast performance.",
            "The OnePlus 11 features a 6.7-inch QHD+ AMOLED display, Snapdragon 8 Gen 2 chipset, and ultra-fast 100W charging for a seamless experience.",
            699,
            "/assets/oneplus.jpg"
        ),
    ];

    products: Signal<Product[]> = signal<Product[]>(this.data);

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}
